import { useState } from "react";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    isFollowing: true
  },
  {
    userName: "prheralb",
    name: "Pablo Hernandez",
    isFollowing: false
  },
  {
    userName: "facuborges",
    name: "Facundo Emanuel Borges",
    isFollowing: true
  },
  {
    userName: "PacoHdezs",
    name: "Paco Hdezs",
    isFollowing: true
  }
]

export function App() {
  return (
    <section className="App">
      {
        users.map(user => {
          const { userName, name, isFollowing } = user
          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}

            </TwitterFollowCard>
          )
        })
      }
    </section>
  )
}
