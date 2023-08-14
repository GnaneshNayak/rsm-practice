import React from 'react';
import { getUser, getUsers } from '../api/user';
import { Form, redirect, useLoaderData, useNavigation } from 'react-router-dom';
import FormGroup from './FormGroup';
import { createPost } from '../api/post';
import PostForm from './PostForm';

const NewPost = () => {
  const users = useLoaderData();
  const { state } = useNavigation();
  const isSubmiting = state === 'submitting';
  return (
    <>
      <h1 className="page-title">New Post</h1>
      <PostForm users={users} />
    </>
  );
};

async function loader({ request: { signal } }) {
  const users = await getUsers({ signal });
  return users;
}

async function action({ request }) {
  const formData = await request.formData();
  const title = formData.get('title');
  const body = formData.get('body');
  const userId = formData.get('userId');
  const post = await createPost(
    { title, body, userId },
    { signal: request.signal },
  );
  return redirect(`/posts/${post.id}`);
}

export const newPostRoute = {
  loader,
  action,
  element: <NewPost />,
};
