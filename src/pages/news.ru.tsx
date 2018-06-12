import * as React from "react";
import Link from "gatsby-link";

interface NewsRuProps {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          fields: {
            langKey: string;
            slug: string;
          };
          frontmatter: {
            title: string;
          };
          id: string;
        };
      }>;
    };
  };
  pageNames: {
    news: string;
  };
}

const NewsRu: React.SFC<NewsRuProps> = ({ data, pageNames: { news } }) => (
  <React.Fragment>
    <h1>{news}</h1>
    <div>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </React.Fragment>
);

export const NewsRuQuery = graphql`
  query NewsRuQuery {
    allMarkdownRemark(
      filter: {
        fields: { langKey: { regex: "/ru/" } }
        frontmatter: { type: { eq: "post" } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            langKey
            slug
          }
          frontmatter {
            date
            title
          }
          id
        }
      }
    }
  }
`;

export default NewsRu;
