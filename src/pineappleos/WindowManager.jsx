import React from 'react';
import FinderWindow from './windows/FinderWindow';
import SettingsWindow from './windows/SettingsWindow';
import TextEditWindow from './windows/TextEditWindow';
import TerminalWindow from './windows/TerminalWindow';
import XcodeWindow from './windows/XcodeWindow';
import KeychainWindow from './windows/KeychainWindow';
import JSONFormatterWindow from './windows/JSONFormatterWindow';
import ContactsWindow from './windows/ContactsWindow';

const appWindows = {
  'Finder': FinderWindow,
  'System Settings': SettingsWindow,
  'TextEdit': TextEditWindow,
  'Terminal.app': TerminalWindow,
  'CodePad.exe': XcodeWindow,
  'The_Vault.app': KeychainWindow,
  'JSON_Formatter.exe': JSONFormatterWindow,
  'Contacts': ContactsWindow,
};

const WindowManager = ({ openApps, activeApp, closeApp, setActiveApp, projects, skills, experiences, certifications, contactInfo, isMobile }) => {
  return (
    <div className="window-manager">
      {openApps.map(appName => {
        const WindowComponent = appWindows[appName];
        return WindowComponent ? (
          <WindowComponent
            key={appName}
            appName={appName}
            closeApp={closeApp}
            setActiveApp={setActiveApp}
            isActive={activeApp === appName}
            projects={projects}
            skills={skills}
            experiences={experiences}
            certifications={certifications}
            contactInfo={contactInfo}
            isMobile={isMobile}
          />
        ) : null;
      })}
    </div>
  );
};

export default WindowManager;
