import { Button } from 'antd';
import { memo, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import style from './index.module.less';

const Index = memo(() => {
  const navigate = useNavigate();

  useEffect(() => {}, []);

  return (
    <div className='w-full bg-[#f5f5f5]'>
      <div className={style.container}>
        <div className={style.left}>
          <Button>新建问卷</Button>
          <ul className='cursor-pointer'>
            <li onClick={() => navigate('/manage/list')}>全部问卷</li>
            <li onClick={() => navigate('/manage/star')}>星标问卷</li>
            <li onClick={() => navigate('/manage/trash')}>回收站</li>
          </ul>
        </div>
        <div className={style.right}>
          <Outlet />
        </div>
      </div>
    </div>
  );
});

export default Index;
