"use client";

import { useEffect } from "react";

import { useToast } from "@/components/ui/use-toast";

import { Button } from "../ui/button";

const Checkout = ({
  plan,
  amount,
  credits,
}: // buyerId,
{
  plan: string;
  amount: number;
  credits: number;
  // buyerId: string;
}) => {
  const { toast } = useToast();

  const onCheckout = async () => {
    console.log(plan);
    if (plan === "Pro Package") {
      toast({
        title: "Pro Package 💕",
        description: (
          <div>
            You have Purchase Bishal Ai Pro Package
            <br />
            Check Mail for Invoice.
          </div>
        ),

        duration: 5000,
        className: "success-toast",
      });
    }
    if (plan === "Premium Package") {
      toast({
        title: "Premium Package 💕",
        description:
          "You have Purchase Bishal Ai Premium Package, Check Mail for Invoice.",
        duration: 5000,
        className: "success-toast",
      });
    }
  };

  return (
    <form action={onCheckout} method="POST">
      <section>
        <Button
          type="submit"
          role="link"
          className="w-full rounded-full bg-purple-gradient bg-cover"
        >
          Buy Credit
        </Button>
      </section>
    </form>
  );
};

export default Checkout;
