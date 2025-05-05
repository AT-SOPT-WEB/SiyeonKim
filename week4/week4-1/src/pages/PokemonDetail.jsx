// PokemonDetail.jsx
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useParams, Link } from 'react-router';

const PokemonDetail = () => {
  const { name } = useParams();
  const [ablity , setAbility] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        setAbility(res.data.abilities);
      } catch (error) {
        console.error('포켓몬 리스트를 불러오는 데 실패했습니다.', error);
      }
    };

    fetchData();
  }, [name]);

  console.log(ablity)
  
  return (
    <div style={{ padding: '2rem' }}>
      <Link to='/'>← 목록으로</Link>
      <h1>{name}</h1>
      <p></p>
    </div>
  );
};

export default PokemonDetail;
