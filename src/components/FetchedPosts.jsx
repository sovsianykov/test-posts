import React, { useEffect } from "react";
import PostCard from "./PostCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import { fetchUsers } from "../redux/actions";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const users = useSelector((state) => state.fetchedPosts.fetchedUsers);

  const posts = useSelector((state) => state.fetchedPosts.fetchedPosts);

  return posts.map((el) => <PostCard post={el} key={el.id} users={users} />);
};
