type StudyDate = { id: string; date: string }
type Participant = { id: string; name: string }
type Question = { id: string; content: string }

type Writable<T> = { -readonly [K in keyof T]: T[K] }
