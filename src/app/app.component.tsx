import React, { FC, createContext } from 'react';
import './app.module.scss';
import { Header } from './components/header/header.component';
import { MainHero } from './components/main-hero/main-hero.component';
import { Services } from './components/services/services.component';
import { IService } from '../custom';
import { Footer } from './components/footer/footer.component';
import useData from './hooks/useData';

const App: FC = () => {
    const { bodas } = useData();
    return (
        <div className="App">
            <Header />
            <MainHero />
            <Services serviceList={bodas as IService[]} />
            <Footer />
        </div>
    );
};

export default App;
