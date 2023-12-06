const Skeleton = () => {
  const classes = 'bg-white/30 rounded-xl animate-pulse'
  return (
    <main className='flex flex-col justify-between items-center min-h-dscreen w-[min(90%,800px)] mx-auto py-5'>
      <div className='w-full flex justify-between items-center'>
        <div className={`${classes} h-8 w-8`} />
        <div className={`${classes} h-8 w-40`} />
        <div className={`${classes} h-8 w-8`} />
      </div>

      <div className={`${classes} w-full max-w-xs aspect-square`} />

      <div className='w-full grid place-items-center gap-2'>
        <div className={`${classes} h-8 w-[min(100%,400px)]`} />
        <div className={`${classes} h-6 w-52`} />
      </div>

      <div className='w-full flex justify-center gap-2'>
        <div className={`${classes} h-4 w-10`} />
        <div className={`${classes} h-4 w-[min(100%,500px)]`} />
        <div className={`${classes} h-4 w-10`} />
      </div>

      <div className='w-[min(100%,500px)] flex justify-between items-center'>
        <div className={`${classes} h-8 w-8`} />
        <div className={`${classes} h-10 w-10`} />
        <div className={`${classes} h-14 w-14`} />
        <div className={`${classes} h-10 w-10`} />
        <div className={`${classes} h-8 w-8`} />
      </div>

      <div />
    </main>
  )
}

export default Skeleton
