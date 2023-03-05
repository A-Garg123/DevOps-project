import { useState } from 'react';
import { Button, Card, DropdownButton, Dropdown, Image, Modal } from 'react-bootstrap';
import { useAuthState } from '../context/context';
import { ApiService } from '../services/ApiService';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import NewReply from './NewReply';

const API_URL = process.env.REACT_APP_API_URL;
const Post = ({post, isSinglePost, isReplyView, setShowingLikesModal, setShowingRepostsModal, appendReply, removePost}) => {
    const { user } = useAuthState();
    const [liked, setLiked] = useState(Boolean(post.already_liked));
    const [reposted, setReposted] = useState(Boolean(post.already_reposted));
    const [showingDeletePostModal, setShowingDeletePostModal] = useState(false);
    const likePost = () => {
        ApiService.togglePostLike(post.post_id, liked)
        .then((res) => {
            if (res.data) setLiked(res.data.liked);
        })
        .catch((err) => console.error(err))
    };
}
