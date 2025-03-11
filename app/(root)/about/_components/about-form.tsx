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
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

import { MapPin, Mail, Phone, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    content: "Via Nazionale, 247 Nocera Superiore (SA)",
  },
  { icon: Mail, title: "Email", content: "contact.arredo@virgilio.it" },
  { icon: Phone, title: "Phone", content: "+39 3881009344" },
  {
    icon: Clock,
    title: "Working Hours",
    content: ["Mon - Fri: 9:00 - 13:00, 16:00-20:00", "Sat: 9:00 - 13:00"],
  },
];

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

export default function AboutForm() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      description: "",
    },
  });

  async function onSubmit(data: FormValues) {
    const { fullName, email, description } = data;
    const payload = {
      name: fullName, // Rinomina fullName in name
      email, // email rimane invariato
      message: description, // Rinomina description in message
    };
    try {
      // Simula una chiamata API
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast({
          title: "Messaggio inviato",
          description: "Il tuo messaggio è stato inviato con successo!",
          action: <ToastAction altText="Chiudi">Chiudi</ToastAction>,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Errore",
          description:
            "Si è verificato un errore durante l'invio del messaggio.",
          action: <ToastAction altText="Riprova">Riprova</ToastAction>,
        });
      }
      form.reset();
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Errore",
        description: "Si è verificato un errore durante l'invio del messaggio.",
        action: <ToastAction altText="Riprova">Riprova</ToastAction>,
      });
    }
  }

  return (
    <section className="relative w-full lg:max-w-[1700px] h-[120vh] md:h-[90vh] lg:px-[3rem] mx-auto lg:lg:rounded-3xl ">
      <div className="relative w-full h-full lg:rounded-3xl inset-0">
        <Image
          src="/hero/img-5.webp"
          alt="Modern luxury home interior"
          fill
          className="object-cover lg:rounded-3xl "
          priority
        />
        <div className="absolute inset-0 bg-black/60 lg:rounded-3xl" />
      </div>

      <div className="absolute top-0 left-[50%] translate-x-[-50%] h-full w-full md:w-[95%]  px-[1.5rem] lg:px-[3rem] mx-auto py-10 lg:py-20 z-[20]">
        <div className="grid lg:grid-cols-2 gap-12 items-center lg:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-4 w-full"
          >
            <h2 className="text-3xl w-full lg:text-6xl font-light leading-tight">
              Conosci il Nostro Team di Esperti
            </h2>
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                >
                  <item.icon className="h-6 w-6 text-white/80 mt-1" />
                  <div>
                    <p className="font-medium text-lg">{item.title}</p>
                    {Array.isArray(item.content) ? (
                      item.content.map((line, i) => (
                        <p key={i} className="text-white/80">
                          {line}
                        </p>
                      ))
                    ) : (
                      <p className="text-white/80">{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
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
