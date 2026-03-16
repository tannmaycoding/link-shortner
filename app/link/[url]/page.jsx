import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {

  const { url } = await params   // unwrap params

  const client = await clientPromise
  const db = client.db("link-shortener")

  const doc = await db.collection("links").findOne({
    short: url
  })

  if (doc) {
    redirect(doc.url)
  }

  redirect("/")
}