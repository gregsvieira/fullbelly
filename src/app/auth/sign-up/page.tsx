'use client'
import { signUpAction } from "@/api/accounts/signup-action";
import { SubmitButton } from "@/components/ui/submit-button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import Form from 'next/form';
import { useActionState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const { toast } = useToast();

  const [message, formAction] = useActionState(signUpAction, null);

  useEffect(() => {
    if (message) {
      if (message.success) {
        toast({ title: "Registered successfully", description: message.text });
        router.push('sign-in')
      } else {
        toast({ title: "Error to register", description: message.text  });
      }
    }
    return () => {}
  }, [message, toast, router]);

  return (
    <div className="p-8">

        <Button variant="ghost" className="absolute right-8 top-8">
          <Link href="sign-in">
            Login on account
          </Link>
        </Button>

      <div className="w-[350px] flex flex-col justify-center gap-6">
        
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create your account free
          </h1>
          <p className="text-sm text-muted-foreground">
            Track your sales through the partner dashboard!
          </p>
        </div>

        <Form action={formAction} className="space-y-4">

          <div className="space-y-2">
            <Label htmlFor="restaurantName">Name of Establishment</Label>
            <Input id="restaurantName" type="text" name="restaurantName"/>
            </div>

            <div className="space-y-2">
            <Label htmlFor="managerName">Name</Label>
            <Input id="managerName" type="text" name="managerName"/>
            </div>


            <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" name="email"/>
            </div>

            <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" name="phone"/>
            </div>

          <SubmitButton
            className="w-full" type="submit" pendingText="Registering..." text="Register" />

          <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
            By continuing, you agree to our{" "}
            <a href="" className="underline underline-offset-4">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="" className="underline underline-offset-4">
              Privacy Policies
            </a>
            .
          </p>
        </Form>

      </div>
    </div>
  );
}
