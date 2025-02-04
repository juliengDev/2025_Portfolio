import { Button, Card, Col } from "react-bootstrap"

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
          <Button 
            variant="primary" 
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </Button>
          <Button 
            variant="outline-primary" 
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        </div>
      </Card.Body>
    </Card>
  </Col>
  )
}

export default ProjectCard
