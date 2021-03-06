
import DynamicBody from './DynamicBody'

class DynamicRect extends DynamicBody {
  constructor (position, size, restitution = 1) {
    super(position, restitution)
    this.size = size
    this.mass = size.x * size.y
  }

  circleCollision (circle) {
    const distX = Math.abs(circle.position.x - this.position.x - this.size.x / 2)
    const distY = Math.abs(circle.position.y - this.position.y - this.size.y / 2)

    if (distX > (this.size.x / 2 + circle.radius)) return false
    if (distY > (this.size.y / 2 + circle.radius)) return false

    if (distX <= (this.size.x / 2)) {
      circle.velocity.y *= -1
      this.coliciona(this)
    }

    if (distY <= (this.size.y / 2)) {
      circle.velocity.x *= -1
      this.coliciona(circle)
    }

    const dx = distX - this.size.x / 2
    const dy = distY - this.size.y / 2

    if (dx * dx + dy * dy <= (circle.radius * circle.radius)) {
      circle.velocity.addAngle(90)
      this.coliciona(circle)
    }
  }

  rectCollision (rect) {

  }
}

export default DynamicRect
