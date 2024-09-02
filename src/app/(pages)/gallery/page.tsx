import { getPersons } from "@/family";
import Gallery from "@/app/(pages)/gallery/Gallery";

export default function GalleryPage() {
  const people = getPersons();

  // remove duplicate pictures
  const pictures = people
    .filter((person) => person.picture != null)
    .map((person) => ({ src: person.picture, alt: person.id }))
    .filter(
      (obj, index, self) => index === self.findIndex((t) => t.src === obj.src)
    );

  return (
    <div>
      <h1 className="my-8 text-center text-2xl font-extrabold text-gray-900 md:text-4xl">
        Gallery
      </h1>

      <Gallery pictures={pictures} />
    </div>
  );
}
