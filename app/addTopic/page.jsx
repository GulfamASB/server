"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import baseUrl from '@/libs/baseUrl';

export const metadata = {
  manifest:'manifest.webmanifest',
  title: {
    template: '%s | Gulfam saifi || gulfaam saifi || gscoder',
    default: 'Gulfam saifi || gulfaam saifi,gscoder', // a default is required when creating a template
  },
  description: 'Discover gscoder unequaled  design mastery at Gulfam saifi || gulfaam saifi , gulfam saifi web developer , gulfaam, ',
  
  metadataBase: new URL('https://gsserver.netlify.app'),
  generator: ' Gulfam saifi || gulfaam saifi, gscoder',
  applicationName: ' Gulfam saifi || gulfaam saifi, gscoder',
  referrer: 'origin-when-cross-origin',
  keywords: ['gulfaam saifi','coding', 'gulfaam','gccoder', 'gulfaam saifi','gulfam software engineer', 'gulfam web developer', 'gscoder','gs coder', 'gulfaam dadri', 'gulfam dadri','gulfam saifi dadri','gulfam developer'],
  authors: [{ name: 'gulfam saifi || gulfaam saifi, gscoder', url:'https://gsserver.netlify.app' }, { name: 'gulfam saifi', url: 'https://gulfaam.com' }],
  creator: 'gulfam saifi',
  publisher: 'gulfam saifi || gulfaam saifi,gscoder ',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: '/favicon.ico' }, new URL('/favicon.ico', 'https://gsserver.netlify.app')],
    shortcut: ['/shortcut-icon.png'],
    apple: [
      { url: '/favicon.ico' },
      { url: '/favicon.ico', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/favicon.ico',
      },
    ],
  },

  verification: {
    google: 'JKclvWmjV-7HYHecgGNwqJPGxx05JG_Xdq0Z66R-kE8',
    other: {
      me: ['my-email', 'my-link'],
    },
  },

  alternates: {
    canonical: '/addTopic',
  },
  openGraph: {
    title:'Gulfam saifi || gulfaam saifi || gscoder',
    description: ' Gulfam saifi || gulfaam saifi , gscoder, Discover  unequaled  design mastery at Gulfam saifi || gulfaam saifi – where invention meets complication. Elevate your space with bespoke innards that  review luxury and reflect your unique style. aplusstudio noida',
  
    images: [{
      url: '/boy.png',
      width: 400,
      height: 300,
    }]
  },
  


}

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch(`${baseUrl}/api/topics`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
          router.refresh();
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <button
        type="submit"
        className="bg-orange-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Topic
      </button>
    </form>
  );
}
