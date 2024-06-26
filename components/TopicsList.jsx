import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import baseUrl from "@/libs/baseUrl";

const getTopics = async () => {
  try {
    const res = await fetch(`${baseUrl}/api/topics`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics() || {}

  return (
    <>
      {topics && topics.map((t) => (
        <div
          key={t._id}
          className=" p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div className="truncate ...">
            <h2 className=" font-bold text-2xl">{t.title}</h2>
            <p>{t.description}</p>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
