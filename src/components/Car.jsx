import { Card } from 'flowbite-react'


export default function Car({text, htext, image}) {
    return (
<div className="shadow-xl max-w-md sm:max-w-2xl">
  <Card
    imgAlt={htext}
    imgSrc={image}
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {htext}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      {text}
    </p>
  </Card>
</div>
    )}