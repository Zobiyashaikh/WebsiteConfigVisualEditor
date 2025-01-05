'use client';

import React, { useState } from 'react';
import { ScreenEditor } from '@/app/Components/ScreenEditor';
import {Button } from '@/components/ui/button';
import { validateConfig } from '../library/validations';

const ConfigEditor: React.FC = () => {
  const [config, setConfig] = useState({
    roles:"Admin",
    appName: 'Config Editor',
    version: '1.0.0',
    screens: [] as any
  });

  const [originalConfig] = useState(config); // For reset functionality
  const handleReset = () => setConfig(originalConfig);

  const onFormSubmit = () => {
    if(validateConfig(config)){
      console.log(config)
      alert('Values are saved successfully!')
    }
  }
  return (
    <div className="p-6 mx-auto bg-white">
      <h1 className="text-2xl font-bold">Website Config Visual Editor</h1>
        <div className="mt-4 flex gap-4">
          <div>
            <input
              type="text"
              value={config.roles}
              onChange={(e) => setConfig({ ...config, roles: e.target.value })}
              className="border rounded p-2"
              placeholder="Role"
            />
          </div>
          <div>
            <input
              type="text"
              value={config.appName}
              onChange={(e) => setConfig({ ...config, appName: e.target.value })}
              className="border rounded p-2"
              placeholder="App Name"
            />
          </div>
          <div>
          <input
            type="text"
            value={config.version}
            onChange={(e) => setConfig({ ...config, version: e.target.value })}
            className="border rounded p-2"
            placeholder="Version"
          />
          </div>
        </div>
        <ScreenEditor
          screens={config.screens}
          onUpdate={(updatedScreens) =>
            setConfig({ ...config, screens: updatedScreens })
          }
        />
        <div className="mt-6 flex gap-4">
          <Button variant="default" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="outline" onClick={onFormSubmit}>
            Save
          </Button>
        </div>
    </div>
  );
};

export default ConfigEditor;
