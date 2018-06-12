import * as React from "react";
import Link from "gatsby-link";

interface LyricsEnProps {
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
    lyrics: string;
  };
}

const LyricsEn: React.SFC<LyricsEnProps> = ({
  data,
  pageNames: { lyrics }
}) => (
  <React.Fragment>
    <h1>{lyrics}</h1>
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

export const LyricsEnQuery = graphql`
  query LyricsEnQuery {
    allMarkdownRemark(
      filter: {
        fields: { langKey: { regex: "/en/" } }
        frontmatter: { type: { eq: "lyrics" } }
      }
      sort: { fields: [frontmatter___title], order: ASC }
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

export default LyricsEn;
