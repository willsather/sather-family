"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogOverlay } from "@/ui/Dialog";
import { getPersonsInPhoto } from "@/family";

export interface Photo {
  src?: string;
  alt: string;
}

function Lightbox({
  src,
  isOpen,
  onClose,
}: {
  src: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  const peopleInPicture = getPersonsInPhoto(src);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay />
      <DialogContent className="flex-cols items-center justify-center bg-white p-10">
        <img src={src} alt="Lightbox" className="max-h-full max-w-full" />

        {peopleInPicture.map((person) => (
          <a
            href={`/people/${person.id}`}
            key={person.id}
            className="text-center underline"
          >
            {person.firstName} {person.lastName}
          </a>
        ))}
      </DialogContent>
    </Dialog>
  );
}

export default function Gallery({ pictures }: { pictures: Photo[] }) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 p-4 sm:grid-cols-3">
      {pictures.map((photo) => (
        <div
          key={photo.src}
          onClick={() => {
            if (photo?.src != null) {
              setSelectedPhoto(photo.src);
            }
          }}
          className="group relative cursor-pointer"
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full rounded-lg object-cover shadow-md transition-transform duration-200 group-hover:scale-105"
          />
        </div>
      ))}

      {selectedPhoto && (
        <Lightbox
          src={selectedPhoto}
          isOpen={!!selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </div>
  );
}
