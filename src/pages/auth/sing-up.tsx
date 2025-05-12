import { Helmet } from 'react-helmet-async'
import { Button } from '../../components/ui/button'
import { Label } from '../../components/ui/label'
import { Input } from '../../components/ui/input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'
import { Link, useNavigate } from 'react-router-dom'

const signUpInForm = z.object({
    restaurantName: z.string(),
    managerName:z.string(),
    phone:z.string(),
    email: z.string().email()
})

type SignUpForm = z.infer<typeof signUpInForm>

export function SingUp() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignUpForm>()

    async function handleSingUp(data: SignUpForm) {
        try {
            console.log(data)
            await new Promise((resolve) => setTimeout(resolve, 2000))
            toast.success('Restaurante cadastrado com sucesso!', {
                action: {
                    label: 'Login',
                    onClick: () => navigate('/sing-in'),
                }
            })
        } catch {
            toast.error('Erro ao cadastrar restaurante.')
        }
    }

    return (
        <>
            <Helmet title='Cadastro' />
            <div className='p-8'>
                <Button asChild className='absolute right-4 top-8' variant={'default'}>
                    <Link to='/sing-in' className=''>
                        Fazer Login
                    </Link>
                </Button>
                <div className='flex w-[350px] flex-col justify-center gap-6'>
                    <div className='flex flex-col gap-2 text-center'>
                        <h1 className='text-2xl font-semibold tracking-tight'>
                            Criar conta grátis
                        </h1>
                        <p className='text-sm text-muted-foreground'>
                            Seja um parceiro e comece suas vendas!
                        </p>
                    </div>
                    <form onSubmit={handleSubmit(handleSingUp)} className='space-y-4'>
                        <div className='space-y-2'>
                            <Label htmlFor='restaurantName'>Nome do estabelecimento</Label>
                            <Input id='restaurantName' type='text' {...register('restaurantName')} />
                        </div>

                         <div className='space-y-2'>
                            <Label htmlFor='managerName'>Seu Nome</Label>
                            <Input id='managerName' type='text' {...register('managerName')} />
                        </div>

                         <div className='space-y-2'>
                            <Label htmlFor='email'>Seu Email</Label>
                            <Input id='email' type='email' {...register('email')} />
                        </div>

                         <div className='space-y-2'>
                            <Label htmlFor='phone'>Seu Celular</Label>
                            <Input id='phone' type='tel' {...register('phone')} />
                        </div>
                        <Button disabled={isSubmitting} variant="destructive" className='w-full' type="submit">
                            Finalizar Cadastro
                        </Button>

                        <p className='px-6 text-center text-sm leading-relaxed text-muted-foreground'>
                            Ao continuar, você esta concordando com nossos{'  '}
                            <a className='underline underline-offset-4' href=''>
                                termos de serviços 
                            </a>{'  '}
                            e{'  '}
                            <a className='underline underline-offset-4' href=''>
                                politicas de priavacidades
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}
