
import {Routes, Route } from "react-router-dom"
import publicRouterPathComponent from "./router";

function App() {
  

  return (
    <Routes>
      {publicRouterPathComponent.map((router,index) => {
        const path = router.path;
        const Layout = router.layout;
        const Page = router.component;

        return (
          <Route 
            key={index}
            path={path}
            element = {
              <Layout>
                <Page/>
               </Layout>
            }
          />
        )
      })}
    </Routes>
  )
}

export default App
