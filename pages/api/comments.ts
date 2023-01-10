/**
 * Any file inisde the folder pages/api is mapped to /api/* and
 * will be treated as an API endpoint instead of a page
 *
 */

import { GraphQLClient, gql } from "graphql-request";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default async function comments(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.body);

  const { name, email, slug, comment } = req.body;

  const grahQLClient = new GraphQLClient(graphqlAPI as string, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
      $post: 
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  const result = await grahQLClient.request(query, req.body);

  return res.status(200).send(result);
}
