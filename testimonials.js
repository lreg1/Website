const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Reuvie K.',
    text: "Lander’s rigorous computer science program has equipped me with the skills to tackle real-world problems. The professors are incredibly supportive and always encourage us to push the boundaries of our knowledge."
  },
  {
    name: 'Yaakov C.',
    text: "Lander's finance program is top-notch. The courses are challenging yet rewarding, and the real-world applications of what we learn are evident every day. The faculty are experts in their fields and incredibly approachable."
  },
  {
    name: 'Idan W.',
    text: "The blend of theoretical knowledge and practical experience in Lander’s finance program is unparalleled. From internships to guest lectures by industry leaders, I’ve gained invaluable insights and connections."
  },
  {
    name: 'Ari R.',
    text: "The hands-on projects and collaborative environment at Lander’s have been instrumental in my growth as a computer scientist. I’ve had the opportunity to work on innovative projects that truly make a difference."
  },
  {
    name: ' Proffessor Jonathan Nunfiez',
    text: "Teaching at Lander’s has been a fulfilling experience. The students' enthusiasm and dedication to their studies are inspiring, and the academic environment here fosters a culture of curiosity and excellence."
    },
  {
    name: 'Dr Aaron Cohen',
    text: "Lander’s emphasis on mental health and well-being is commendable. The institution provides a supportive environment that allows students to thrive academically while maintaining their personal well-being."
  },
  {
    name: 'Jacob Seppanen',
    text: "My time at Lander’s was pivotal in shaping my career. The strong academic foundation and the emphasis on practical skills prepared me to excel in the tech industry. Lander’s continues to be a place where future leaders are made."
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  username.innerHTML = name

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
