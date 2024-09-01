"use client";

import { useState } from "react";
import { Dialog, DialogOverlay, DialogContent } from "@/ui/Dialog";

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
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay />
      <DialogContent className="bg-white p-10">
        <img src={src} alt="Lightbox" className="max-h-full max-w-full" />
      </DialogContent>
    </Dialog>
  );
}

export default function Gallery({ pictures }: { pictures: Photo[] }) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-3 gap-4 p-4">
      {pictures.map((photo, index) => (
        <div
          key={index}
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
