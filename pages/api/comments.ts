/**
 * Any file inisde the folder pages/api is mapped to /api/* and
 * will be treated as an API endpoint instead of a page
 *
 */

import { GraphQLClient, gql } from "graphql";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default async function comments(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, email, slug, comment } = req.body;

  const grahQLClient = new GraphQLClient(graphqlAPI, {
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

  const result = await GraphQLClient.request(query, req.body);

  return res.status(200).send(result);
}
