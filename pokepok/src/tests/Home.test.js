import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import App from '../App'
import { getCardList, getDetailCard } from '../store/actions/actionCardList'

afterEach(() => cleanup())

jest.mock('../store/actions/actionCardList')

const dataDummy = {
  "id": "xy7-4",
  "name": "Bellossom",
  "nationalPokedexNumber": 182,
  "imageUrl": "https://images.pokemontcg.io/xy7/4.png",
  "imageUrlHiRes": "https://images.pokemontcg.io/xy7/4_hires.png",
  "types": [
    "Grass"
  ],
  "supertype": "Pokémon",
  "subtype": "Stage 2",
  "evolvesFrom": "Gloom",
  "hp": "120",
  "retreatCost": [
    "Colorless"
  ],
  "convertedRetreatCost": 1,
  "number": "4",
  "artist": "Mizue",
  "rarity": "Uncommon",
  "series": "XY",
  "set": "Ancient Origins",
  "setCode": "xy7",
  "attacks": [
    {
      "cost": [
        "Grass"
      ],
      "name": "Windmill",
      "text": "Switch this Pokémon with 1 of your Benched Pokémon.",
      "damage": "20",
      "convertedEnergyCost": 1
    },
    {
      "cost": [
        "Grass",
        "Colorless"
      ],
      "name": "Flower Tornado",
      "text": "Move as many Grass Energy attached to your Pokémon to your other Pokémon in any way you like.",
      "damage": "60",
      "convertedEnergyCost": 2
    }
  ],
  "weaknesses": [
    {
      "type": "Fire",
      "value": "×2"
    }
  ]
}

getCardList.mockReturnValue({
  type: 'SET_POKEMONS',
  payload: [dataDummy]
})
getDetailCard.mockReturnValue({
  type: 'SET_CARD_DETAIL',
  payload: dataDummy
})

describe('Home Page Testing', () => {
  it('Should renders correct Home Page', () => {
    const { getByText } = render(<App/>)
    const title = getByText(/Pokemon Cards/i);
    expect(title).toBeInTheDocument();
  })

  it('Should renders Form Search Component', () => {
    const { getByTestId } = render(<App/>)
    const searchForm = getByTestId('homepage-searchform');
    expect(searchForm).toBeInTheDocument();
  })

  it('Should renders Search Button in Form Search Component', () => {
    const { getByText } = render(<App/>)
    const searchButton = getByText(/search/i);
    expect(searchButton).toBeInTheDocument();
  })

  it('Should renders Pokemon List Cards Component', () => {
    const { getByTestId } = render(<App/>)
    const listcards = getByTestId('homepage-listcards');
    expect(listcards).toBeInTheDocument();
  })
})

describe('Component Card List Testing with Mock', () => {
  it('Should renders Detail Cards Component when Card clicked', () => {
    const { getByTestId } = render(<App/>)
    const toDetailCard = getByTestId('to-detail-card');
    fireEvent.click(toDetailCard)
    const detailCard = getByTestId('detail-card')
    expect(detailCard).toBeInTheDocument();
  })

  it('Should display Card Details', () => {
    const { getByText } = render(<App/>)
    const name = getByText('Bellossom');
    const pokedex = getByText('Pokedex ID: 182');
    const hp = getByText('HP: 120');
    const rarity = getByText('Rarity: Uncommon');
    const series = getByText('Card Series: XY');
    const set = getByText('Card Set: Ancient Origins');
    expect(name).toBeInTheDocument();
    expect(pokedex).toBeInTheDocument();
    expect(hp).toBeInTheDocument();
    expect(rarity).toBeInTheDocument();
    expect(series).toBeInTheDocument();
    expect(set).toBeInTheDocument();
  })
})