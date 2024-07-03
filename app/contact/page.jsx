"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "082120585206",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "rendychristiann@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description:
      "Jl. H. Amat I No.56, RT.004/RW.3, Kukusan, Beji, Depok City, West Java 16425",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
            <div className="xl:w-[54%] order-2 xl:order-none">
                <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
                    <h3 className="text-4xl text-accent font-semibold">Lets work together!</h3>
                    <p className="text-white/60">Contact me in the form below or via LinkedIn/Email/Telephone Number for further opportunity or collaboration! <span className="font-semibold text-accent">(this form feature is still not working optimally at this time)</span></p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        <Input type="firstname" placeholder="First Name"/>
                        <Input type="lastname" placeholder="Last Name"/>
                        <Input type="email" placeholder="Email Address"/>
                        <Input type="phone" placeholder="Phone Number"/>
                    </div>
                    <Textarea className="h-[200px]" placeholder="Type your message here!"/>

                    <Button size="lg" className="max-w-50 justify-center items-center">Send message</Button>
                </form>
            </div>
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                <ul className="flex flex-col gap-10">
                    {info.map((item, index) => {
                        return <li key={index} className="flex items-center gap-6">
                            <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center ">
                                <div className="text-[28px]">{item.icon}</div>
                            </div>
                            <div className="flex-1">
                                <p className="text-white/60 font-semibold">{item.title}</p>
                                <h3 className="text-xl">{item.description}</h3>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
