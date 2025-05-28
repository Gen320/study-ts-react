import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';

import Button from '@/components/common/parts/Button';

type PokemonType = {
  type: {
    name: string;
  };
};

type PokemonSprites = {
  front_default: string;
};

type Pokemon = {
  sprites: PokemonSprites;
  name: string;
  types: PokemonType[];
  height: number;
  weight: number;
};

export const Page: NextPage = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const handleSetQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    console.log(query);
  };

  const fetchPokemon = async () => {
    console.log(`https://pokeapi.co/api/v2/pokemon/{query.toLocaleLowerCase}`);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
      const data = (await response.json()) as Pokemon;
      console.log(data);
      setPokemon(data);
    } catch (e) {
      console.log(e);
      setError('your inputed Pokemon is not found');
    }
  };

  return (
    <div className="max-auto mt-8 max-w-4xl">
      <div className="flex justify-center">
        <div>
          {/* 入力フォーム */}
          <div>
            <input
              className="rounded-md border px-3 py-2 text-center outline-none"
              type="text"
              size={40}
              value={query}
              placeholder="input pokemon name in English"
              onChange={handleSetQuery}
            />
            {error && <p className="mt-2 text-center text-base text-red-500">{error}</p>}
          </div>

          {/* ポケモンの情報 */}
          {pokemon && (
            <div className="mt-4 text-center text-base">
              <h3>{pokemon.name}</h3>
              <div className="flex justify-center">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              </div>
              <p>タイプ: {pokemon.types.map((pokemonType) => pokemonType.type.name).join(', ')}</p>
              <p>身長: {pokemon.height / 10}m</p>
              <p>重さ: {pokemon.weight}kg</p>
            </div>
          )}

          {/* 検索ボタン */}
          <div className="flex justify-center">
            <Button onClick={fetchPokemon} label="検索" variant="primary" className="mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
