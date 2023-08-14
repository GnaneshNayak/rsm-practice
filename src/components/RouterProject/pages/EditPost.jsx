import React from 'react';
import PostForm from './PostForm';
import { redirect, useLoaderData } from 'react-router-dom';
import { getUsers } from '../api/user';
import { getPost, updatePost } from '../api/post';

const EditPost = () => {
  const { users, post } = useLoaderData();
  console.log(post);
  return (
    <>
      <>
        <h1 className="page-title">edit post</h1>
        <PostForm users={users} defaultValues={post} />
      </>
    </>
  );
};

async function loader({ request: { signal }, params: { postId } }) {
  const post = getPost(postId, { signal });
  const users = getUsers({ signal });
  return { post: await post, users: await users };
}

async function action({ request, params: { postId } }) {
  const formData = await request.formData();
  const title = formData.get('title');
  const body = formData.get('body');
  const userId = formData.get('userId');
  const post = await updatePost(
    postId,
    { title, body, userId },
    { signal: request.signal },
  );
  return redirect(`/posts/${post.id}`);
}

export const editPostRoute = {
  loader,
  action,
  element: <EditPost />,
};
