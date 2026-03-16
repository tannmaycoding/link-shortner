import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    const body = await request.json();
    const { url, short } = body;

    const client = await clientPromise;
    const db = client.db("link-shortener");
    const collection = db.collection("links");

    const existing = await db.collection("links").findOne({ short })

    if (existing) {
        return Response.json({ success: false, error: "Short link already exists" })
    }

    const result = await collection.insertOne({
        url: url,
        short: short,
    });

    return Response.json({
        success: true,
        result: result,
    });
}