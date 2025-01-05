import React from 'react';
import {Button } from '@/components/ui/button';
interface Section {
  id: string;
  title: string;
  type: string;
}

interface Props {
  sections: Section[];
  onUpdate: (sections: Section[]) => void;
}

export const SectionEditor: React.FC<Props> = ({ sections, onUpdate }) => {
  const addSection = () => {
    onUpdate([...sections, { id: '', title: '', type: '' }]);
  };

  const updateSection = (index: number, section: Section) => {
    const updatedSections = sections.map((s, i) =>
      i === index ? section : s
    );
    onUpdate(updatedSections);
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-medium">Sections</h3>
      {sections.map((section, index) => (
        <div key={index} className="border rounded p-4 my-2">
          <input
            type="text"
            value={section.id}
            onChange={(e) =>
              updateSection(index, { ...section, id: e.target.value })
            }
            className="border rounded p-2"
            placeholder="Section ID"
          />
          <input
            type="text"
            value={section.title}
            onChange={(e) =>
              updateSection(index, { ...section, title: e.target.value })
            }
            className="border rounded p-2 mt-2"
            placeholder="Section Title"
          />
          <select
            value={section.type}
            onChange={(e) =>
              updateSection(index, { ...section, type: e.target.value })
            }
            className="border rounded p-2 mt-2"
          >
            <option value="">Select Type</option>
            <option value="Banner">Banner/Header</option>
            <option value="Form">Form</option>
            <option value="Slider">Slider</option>
            <option value="Photo Gallery">Photo Gallery</option>
            <option value="Footer">Footer</option>
            <option value="Copyright">Copyright</option>
          </select>
        </div>
      ))}
      <Button variant="outline" onClick={addSection}>
        Add Section
      </Button>
    </div>
  );
};
