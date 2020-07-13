import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do respositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/37095172?s=460&u=64635859978def290c4c6eff09262b9f19118b97&v=4"
            alt="Fabiano Ramos"
          />
          <div>
            <strong>fabramosdev/shopcontrol</strong>
            <p>
              ESTUDO - CRUD completo feito 100% em javascript básico, salvando
              dados no local Storage
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/37095172?s=460&u=64635859978def290c4c6eff09262b9f19118b97&v=4"
            alt="Fabiano Ramos"
          />
          <div>
            <strong>fabramosdev/shopcontrol</strong>
            <p>
              ESTUDO - CRUD completo feito 100% em javascript básico, salvando
              dados no local Storage
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/37095172?s=460&u=64635859978def290c4c6eff09262b9f19118b97&v=4"
            alt="Fabiano Ramos"
          />
          <div>
            <strong>fabramosdev/shopcontrol</strong>
            <p>
              ESTUDO - CRUD completo feito 100% em javascript básico, salvando
              dados no local Storage
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
