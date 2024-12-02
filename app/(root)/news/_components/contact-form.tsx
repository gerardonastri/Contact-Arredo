"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";
// import { ToastAction } from "@/components/ui/toast";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  description: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  //   const toast = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      description: "",
    },
  });

  async function onSubmit(data: FormValues) {
    console.log(data);
    // try {
    //   // Simula una chiamata API
    //   await new Promise((resolve) => setTimeout(resolve, 1000));
    //   toast({
    //     title: "Messaggio inviato",
    //     description: "Il tuo messaggio è stato inviato con successo!",
    //     action: <ToastAction altText="Chiudi">Chiudi</ToastAction>,
    //   });
    //   form.reset();
    // } catch (error) {
    //   toast({
    //     variant: "destructive",
    //     title: "Errore",
    //     description: "Si è verificato un errore durante l'invio del messaggio.",
    //     action: <ToastAction altText="Riprova">Riprova</ToastAction>,
    //   });
    // }
  }

  return (
    <section className="relative max-w-[1700px] h-[70vh] px-[3rem] mx-auto rounded-3xl ">
      <div className="absolute inset-0">
        <Image
          src="/images/news-hero.jpg"
          alt="Modern luxury home interior"
          fill
          className="object-cover rounded-3xl"
          priority
        />
        <div className="absolute inset-0 bg-black/60 rounded-3xl" />
      </div>

      <div className="relative h-full max-w-[1700px] px-[3rem] mx-auto py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center lg:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-4 w-full"
          >
            <h2 className="text-5xl w-full lg:text-6xl font-light leading-tight">
              Meet Our Dedicated Professionals
            </h2>
            <p className="text-white/80 max-w-md text-lg">
              Finding your perfect home has never been easier. Contact us now
              for customized real estate solutions and unparalleled support.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=""
          >
            <div className="bg-white rounded-[2rem] p-8">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Full Name"
                            {...field}
                            className="border-0 border-b border-gray-200 rounded-none px-0 py-2 text-base focus-visible:ring-0 focus-visible:border-gray-900"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Email"
                            type="email"
                            {...field}
                            className="border-0 border-b border-gray-200 rounded-none px-0 py-2 text-base focus-visible:ring-0 focus-visible:border-gray-900"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Description"
                            {...field}
                            className="min-h-[120px] border-0 border-b border-gray-200 rounded-none px-0 py-2 text-base focus-visible:ring-0 focus-visible:border-gray-900 resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-black text-white hover:bg-black/90 rounded-full py-6 text-base"
                  >
                    Send
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}