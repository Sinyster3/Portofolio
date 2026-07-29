import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function GuestBook() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages();

    const channel = supabase
      .channel("guestbook")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
        },
        (payload) => {
          setMessages((prev) => [payload.new, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  async function getMessages() {
    const { data } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) {
      setMessages(data);
    }
  }

  function timeAgo(date) {
    const seconds = Math.floor(
      (new Date() - new Date(date)) / 1000
    );

    const intervals = {
      tahun: 31536000,
      bulan: 2592000,
      hari: 86400,
      jam: 3600,
      menit: 60,
    };

    for (let key in intervals) {
      const value = Math.floor(seconds / intervals[key]);

      if (value > 0)
        return `${value} ${key} yang lalu`;
    }

    return "Baru saja";
  }

  return (
    <section className="max-w-6xl mx-auto mt-8">

      <div className="bg-gradient-to-br from-cyan-50 to-white rounded-3xl shadow-lg p-8">

        <div className="mb-8">

          <h2 className="text-3xl font-bold text-cyan-700">
            💬 Visitor Guest Book
          </h2>

          <p className="text-gray-600 mt-2">
            Thank you for visiting my portfolio.
            Feel free to leave a message.
          </p>

        </div>

        <div className="space-y-5">

          {messages.length === 0 ? (
            <div className="text-center text-gray-500 py-10">
              No messages yet.
            </div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className="bg-white rounded-2xl shadow-md p-6 border border-cyan-100 hover:shadow-xl transition duration-300"
              >
                <div className="flex gap-4">

                  <div className="w-14 h-14 rounded-full bg-cyan-600 text-white flex items-center justify-center text-xl font-bold shrink-0">
                    {msg.name.charAt(0).toUpperCase()}
                  </div>

                  <div className="flex-1">

                    <div className="flex justify-between items-center">

                      <div>

                        <h3 className="font-bold text-cyan-700 text-lg">
                          {msg.name}
                        </h3>

                        <p className="text-sm text-gray-400">
                          {timeAgo(msg.created_at)}
                        </p>

                      </div>

                    </div>

                    <p className="mt-4 text-gray-700 leading-7">
                      {msg.message}
                    </p>

                  </div>

                </div>

              </div>
            ))
          )}

        </div>

      </div>

    </section>
  );
}