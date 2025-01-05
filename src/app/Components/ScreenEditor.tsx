import React from 'react';
import { SectionEditor } from '@/app/Components/SectionEditor';
import {Button } from '@/components/ui/button';
interface Screen {
  id: string;
  title: string;
  sections: any[];
}
interface Props {
  screens: Screen[];
  onUpdate: (screens: Screen[]) => void;
}
export const ScreenEditor: React.FC<Props> = ({ screens, onUpdate }) => {
  const addScreen = () => {
    if (screens.length < 5) {
      onUpdate([
        ...screens,
        { id: '', title: '', sections: [] },
      ]);
    } else {
      alert('You can only have up to 5 screens.');
    }
  };

  const updateScreen = (index: number, screen: Screen) => {
    const updatedScreens = screens.map((s, i) =>
      i === index ? screen : s
    );
    onUpdate(updatedScreens);
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">Screens</h2>
      {screens.map((screen, index) => (
        <div key={index} className="border rounded p-4 my-4">
          {/* Screen Label */}
          <h3 className="text-lg font-bold mb-2">Screen {index + 1}</h3>
          <input
            type="text"
            value={screen.id}
            onChange={(e) =>
              updateScreen(index, { ...screen, id: e.target.value })
            }
            className="border rounded p-2"
            placeholder="Screen ID"
          />
          <input
            type="text"
            value={screen.title}
            onChange={(e) =>
              updateScreen(index, { ...screen, title: e.target.value })
            }
            className="border rounded p-2 mt-2"
            placeholder="Title (eg. Home, About)"
          />
          <SectionEditor
            sections={screen.sections}
            onUpdate={(sections) =>
              updateScreen(index, { ...screen, sections })
            }
          />
        </div>
      ))}
      <Button variant="outline" onClick={addScreen}>
        Add Screen
      </Button>
    </div>
  );
};
