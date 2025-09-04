
import { NextResponse } from 'next/server';

import { FinlightApi } from "finlight-client";

const api = new FinlightApi({ apiKey: 'sk_6cb8d62e2fbf3100779666d39bfa7911f5a29cb55f7689ae146b12ea9750f6cd' })



export async function GET() {
  try {
    const result = await api.articles.fetchArticles({
      pageSize: 15,
      language: 'pt',
      sortBy: 'relevancy',
     
    });

    // Garante que o retorno seja só o array de artigos
   
    return NextResponse.json(result.articles ?? []);
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}
