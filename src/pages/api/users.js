// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { randomUsers } from "@/utils/dummyUsers";

export default function handler(request, response) {
  response.status(200).json(randomUsers);
}
