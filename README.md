# NetSuite Suitelet × ReactJS Integration

This repository demonstrates how to embed **ReactJS components directly inside a NetSuite Suitelet**, enabling modern interactive UI experiences within the NetSuite environment. The project uses SuiteScript 2.0, React 16 (UMD), Babel standalone, and a custom JavaScript library to render React components dynamically.

---

## 🚀 Overview

NetSuite’s native UI can be limiting — this integration solves that by allowing you to:

- Render **React components** inside Suitelets
- Use **live state**, events, and JSX
- Load React, ReactDOM, and Babel directly from CDNs
- Inject JSX components dynamically using inline HTML fields
- Organize React scripts inside SuiteScripts

This repository includes a working example of a simple React component called **PartFinder**, rendered inside a Suitelet.

---

---

## 🧠 How It Works

### 1️⃣ **React Library Injection**
`JS_ReactLibrary.js` provides two key functions:

#### ✔ `getReactIncludes()`
Loads:
- React 16 UMD
- ReactDOM 16 UMD
- Babel for JSX support

These scripts allow React to run inside NetSuite.

#### ✔ `getComponentScript(componentName, tagName, file)`
Loads and renders a React component dynamically using:
- `<script type="text/babel">`
- `ReactDOM.render()`  
- Component source from a JS file stored in SuiteScripts

---

## 🧩 Example React Component (PartFinder)

The included sample component demonstrates:
- React functional components
- State handling using `useState`
- Form submission events

```jsx
function PartFinder(props) {
    const [partname, setPartname] = React.useState();
    const [vendor, setVendor] = React.useState();

    const handleSubmit = event => {
        alert(partname + " - " + vendor);
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            Item Name:<br/>
            <input type="text" value={partname} onChange={(e) => setPartname(e.target.value)} /><br/><br/>
            
            Vendor Name:<br/>
            <input type="text" value={vendor} onChange={(e) => setVendor(e.target.value)} /><br/><br/>

            <button>Submit</button>
        </form>
    );
}


---
## 🖥️ Suitelet Rendering React

The Suitelet (`SL_Suitelet_React.js`) performs the following:

- Creates a NetSuite form  
- Adds an `INLINEHTML` field  
- Injects React + JSX component + mounting point  
- Renders `<PartFinder />` inside a `<div id="dynHTML"></div>`  

This enables **full React interactivity** directly within the Suitelet UI.

---

## ⚙️ Technologies Used

- SuiteScript 2.0  
- React 16 UMD  
- ReactDOM 16 UMD  
- Babel Standalone (for JSX transformation in-browser)  
- Inline HTML Rendering  
- NetSuite Suitelets  
- AMD Configuration (RequireJS)

---

## 🌟 Features

- Modern UI inside NetSuite  
- Fully dynamic **React JSX rendering**  
- Clean, modular design for React components  
- Easily extendable to load additional React components  
- Includes a simple, working example Suitelet for comparison  

---

## 📘 Usage

1. Upload all repository files into NetSuite under:  
   `SuiteScripts/ReactSuitelet/`

2. Deploy **SL_Suitelet_React.js** as a Suitelet via NetSuite Script Deployment.

3. Open the generated Suitelet URL.

4. Enjoy a fully interactive React form rendered inside NetSuite.

---

## ✨ Author

**Muhammad Shahmeer Khan**  
NetSuite Developer | SuiteScript Specialist | React Integration Expert

If you want, I can also generate for this repo:

✅ A **technical wiki**  
✅ A **component expansion guide**  
✅ A **YouTube-style tutorial script**  
Just tell me!
