import { Card, Col } from "react-bootstrap"

function ProjectCard( {value}) {
  const {
    id,
    image,
    title,
    description,
    liveDemo,
    githubLink
  } = value

  return (
    <Col key={id}>
    <Card className="h-100 shadow-sm">
      <Card.Img 
        variant="top" 
        src={image} 
        alt={title}
        className="object-fit-cover"
        style={{ height: 'auto' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-center mb-3">{title}</Card.Title>
        <Card.Text className="text-center mb-4">{description}</Card.Text>
        
          <div className="d-flex justify-content-center gap-3 mt-auto">
          <div className="d-grid gap-2 d-md-block">
          <a
            href={liveDemo}
            target=" _blank"
            className="custom-cta-btn btn btn-outline-secondary text-white mx-2"
          >
            <i className="fas fa-globe" /> Live Demo
          </a>
          <a href={githubLink} target=" _blank" className="btn btn-outline-secondary mx-2">
            <i className="fab fa-github" /> Repo
          </a>
          </div>
        </div>
      </Card.Body>
    </Card>
  </Col>
  )
}

export default ProjectCard
