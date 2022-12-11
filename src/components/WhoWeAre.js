import * as React from "react";
import PropTypes from "prop-types";
import { StaticQuery } from "gatsby";
import { graphql } from 'gatsby'
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import quoteOpen from '../img/quote-open.svg';
import quoteClose from '../img/quote-close.svg';



const WhoWeAreTemplate = (props) => {
    const { employees, enabled } = props.data.markdownRemark.frontmatter.employeesWidget;

    console.log( employees, enabled )

    if (!enabled) return null

    return (
        <>
            <h3 className="title is-size-3 has-text-weight-bold is-bold-light">
                Our Team
            </h3>
            {employees && employees.map((employee, idx) => (<EmployeeCard key={employee.name} count={idx} employee={employee} />))}
        </>
    )

}

const EmployeeCard = ({ employee, count }) => {
    const cardStyle = { borderRadius: "5px"}
    const cardClassName = `container columns responsive-flex is-vcentered has-background-grey-lighter my-3 py-2 px-4 ${count % 2 === 1 ? 'is-flex-direction-row-reverse' : ''}`
    return (
        <div  style={cardStyle} className={cardClassName}>
            <div className="column has-text-centered is-one-quarter">
                <PreviewCompatibleImage
                round
                imageInfo={{
                    image: employee.image,
                    alt: `Portriat of ${employee.name}`,
                width:
                    employee.image.childImageSharp
                    .gatsbyImageData.height,
                height:
                    employee.image.childImageSharp
                    .gatsbyImageData.height,
                }}
                />
                <h3 className="is-size-8 has-text-weight-bold is-bold-light">{employee.name}</h3>
                <p className="is-size-10 is-italic">{employee.role}</p>
            </div>
            <div className="column is-flex is-flex-direction-column">
                <img
                src={quoteOpen}
                alt="Open Quotation Mark"
                style={{ width: "2em", height: "3em" }}
                 />
                <p className="is-size-5 has-text-centered">{employee.bio}</p>
                <img
                className="is-align-self-flex-end"
                src={quoteClose}
                alt="Close Quotation Mark"
                style={{ width: "2em", height: "3em" }}
                 />
            </div>
       </div>
    )
}

WhoWeAre.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
          frontmatter: PropTypes.shape({
            employees: PropTypes.array,
            employeesWidget: PropTypes.shape({
                enabled: PropTypes.bool
            })
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
                    employeesWidget {
                        enabled
                        employees {
                            image {
                                childImageSharp {
                                    gatsbyImageData(width: 120, height: 120, quality: 64, layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
                                }
                            }
                            bio
                            name
                               role
                        }
                    }
                }
            }
        }`
    }
        render={(data) => <WhoWeAreTemplate data={data} />}
      />
    );
  }
  

