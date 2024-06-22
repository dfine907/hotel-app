'use server'
import { readFile, writeFile } from 'fs/promises'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

type User = {
  id: string
  firstName: string
  lastName: string
}
const createUser = async (formData: FormData) => {
  'use server'
  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string
  const newUser: User = {
    firstName,
    lastName,
    id: Date.now().toString(),
  }

  try {
    await saveUser(newUser)
    // some logic
  } catch (error) {
    console.log(error)
  }

  // OPTION 1:  revalidatePath('/actions')
  //Option 2 (but not inside try, catch:)
  redirect('/')
}

export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile('users.json', { encoding: 'utf-8' })
  const users = result ? JSON.parse(result) : []
  return users
}

const saveUser = async (user: User) => {
  const users = await fetchUsers()
  users.push(user)
  await writeFile('users.json', JSON.stringify(users))
}

export default createUser
