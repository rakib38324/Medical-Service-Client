import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { getTokenFromLocalStorage } from "../common/utilis";
import toast from "react-hot-toast";

// Define the expected structure of the API response
export interface PaymentIntentResponse {
  success: boolean;
  data: string; // Assuming 'data' contains the clientSecret
}

const CheckoutForm = ({
  id,
  setPaymentId,
}: {
  id: string;
  setPaymentId: (value: string) => void;
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [clientSecret, setClientSecret] = useState<string>("");

  const token = getTokenFromLocalStorage();

  useEffect(() => {
    (async () => {
      try {
        const response: AxiosResponse<PaymentIntentResponse> = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/appointment/create_payment_intent/${id}`,
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Ensure the token format is correct
            },
          }
        );

        if (response.data?.success) {
          setClientSecret(response.data.data);
        } else {
          console.error("Failed to create payment intent:", response.status);
        }
      } catch (error) {
        // Type narrowing for AxiosError
        if (axios.isAxiosError(error)) {
          const errorMessage =
            (error.response?.data as { errorMessage?: string })?.errorMessage ||
            "Oops! Something went wrong. Try again.";

          setError(errorMessage);
          console.error("Error", errorMessage);
        } else {
          console.error("An unexpected error occurred:", error);
        }
      }
    })();
  }, [id, token]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const toastId = toast.loading("Processing...");
    if (!stripe || !elements) {
      toast.error("Opps! Something went wrong.", {
        id: toastId,
        duration: 6000,
      });
      return; // Make sure Stripe.js has loaded
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      toast.error("Opps! Something went wrong.", {
        id: toastId,
        duration: 6000,
      });
      return;
    }

    const { error: paymentMethodError, paymentMethod } =
      await stripe.createPaymentMethod({
        type: "card",
        card,
      });

    if (paymentMethodError) {
      toast.error(
        paymentMethodError.message
          ? paymentMethodError.message
          : "Opps! Something went wrong.",
        {
          id: toastId,
          duration: 6000,
        }
      );
      setError(paymentMethodError.message || "An error occurred");
      console.log("[error]", paymentMethodError);
      return;
    } else {
      setError("");
      console.log("[PaymentMethod]", paymentMethod);
    }

    if (!clientSecret) {
      toast.error("Client secret is not set.", { id: toastId, duration: 6000 });
      setError("Client secret is not set.");
      return;
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: "Demo name",
            email: "demo@gmail.com",
          },
        },
      });

    if (confirmError) {
      toast.error(
        confirmError.message
          ? confirmError.message
          : "Opps! Something went wrong.",
        { id: toastId, duration: 6000 }
      );
      setError(confirmError.message || "Payment confirmation failed");
      console.log(confirmError);
    } else if (paymentIntent) {
      setMessage(`Payment ${paymentIntent.status}`);
      console.log(paymentIntent);
      setPaymentId(paymentIntent.id);
      toast.success("Payment Complete", { id: toastId });
    }
  };

  return (
    <form
      className="my-10 border p-5 bg-gray-50 dark:bg-[#333520b1] rounded-lg"
      onSubmit={handleSubmit}
    >
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "18px",
              color: "#00579b",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {error && <p className="text-red-600 mt-4">{error}</p>}
      <button
        className="mt-5 w-full p-2 text-textDark bg-secondary rounded-md cursor-pointer hover:bg-secondaryDark"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Make payment
      </button>
      {message && <p className="text-green-600 mt-4">{message}</p>}
    </form>
  );
};

export default CheckoutForm;
