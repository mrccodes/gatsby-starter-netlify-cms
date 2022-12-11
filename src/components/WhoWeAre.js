import * as React from "react";
import PropTypes from "prop-types";
import { StaticQuery } from "gatsby";
import { graphql } from 'gatsby'
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const WhoWeAreTemplate = (props) => {
    const {employees} = props.data.markdownRemark.frontmatter;
    console.log(employees)

    return employees && employees.map((employee) => {
        return (

                <div key={employee.name} className="container">
                     <PreviewCompatibleImage
                      imageInfo={{
                        image: employee.image,
                        alt: `Portriat of ${employee.name}`,
                        width:
                          employee.image.childImageSharp
                            .gatsbyImageData.width,
                        height:
                          employee.image.childImageSharp
                            .gatsbyImageData.height,
                      }}
                    />

                    <h3 className="is-size-8 has-text-weight-bold is-bold-light">{employee.name}</h3>
                    <p className="is-size-10 is-italic">{employee.role}</p>
                </div>
        )
    })

}

// data.markdown.frontmatter.employees
WhoWeAre.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
          frontmatter: PropTypes.shape({
            employees: PropTypes.array
          }),
        }),
      }),
  };
  



export default function WhoWeAre() {
    return (
      <StaticQuery
        query={graphql`
        query WhoWeAreQuery {
            markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
              frontmatter {
                        employees {
                            image {
                                childImageSharp {
                        gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
                      }
                  }
                  bio
                  name
                  role
                }
              }
            }
          }
        `}
        render={(data) => <WhoWeAreTemplate data={data} />}
      />
    );
  }
  

