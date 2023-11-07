import { json, type RequestEvent } from "@sveltejs/kit";
import { put } from "@vercel/blob";
import { kv } from '@vercel/kv'

export async function POST({ request }: RequestEvent) {
    try {
        const formData = Object.fromEntries(await request.formData());

        if (!(formData.file as File).name || (formData.file as File).name === 'undefined') {
            throw new Error('File name is missing or is "undefined".');
        }

        const { file } = formData as { file: File };

        const { url } = await put(file.name, file, { access: "public" });

        await kv.set('currentFilepath', url);

        return json({ success: true, message: 'Successfully uploaded the file', uploaded: url });
    } catch (error) {
        console.error('Error with the file:', error);
        return json(
            { success: false, error: `An error occurred with the file` },
            { status: 500 }
        );
    }
}