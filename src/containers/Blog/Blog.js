import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';

import FullPostV2 from '../../components/FullPostV2/FullPostV2';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from '../../axios';

class Blog extends Component {
    state= {
        posts: [],
        selectedPost: ''
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Makaila'
                    }
                });
                this.setState({
                    posts: updatedPosts
            });

        })
    }
    postSelectedClickHandler(id){
        const result = this.state.posts.filter((post) => {
            return post.id === id;
        });
        this.setState({selectedPost: result[0]});

    }
    render () {
        const posts = this.state.posts.map(post => {
            return <Post title={post.title} key={post.id} author={post.author} selectPost={()=>this.postSelectedClickHandler(post.id)}/>
        });
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPostV2 id={this.state.selectedPost.id}/>

                    <FullPost id={this.state.selectedPost.id} title={this.state.selectedPost.title} author={this.state.selectedPost.author} body={this.state.selectedPost.body}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;