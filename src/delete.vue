<template>
	<div class="card-body">
		<div class="profiletimeline">
			<div class="sl-item">
				<PollMenu></PollMenu>
				<div class="sl-left">
					<div class="todo-item" v-for="poll in allPolls" v-bind:key="poll.id">
						<h1>POLLS WILL DEFINITELY GO HERE</h1>
						<h1>{poll.question}</h1>
						<h1>{poll.slug_field}</h1>
					</div>
					<!-- <img
														src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/users/1.jpg"
														alt="user"
														class="img-circle"
													/> -->
				</div>
			</div>
			<div class="sl-right">
				<div>
					<a href="#" class="link">John Doe</a>
					<div class="todo-item" v-for="poll in allPolls" v-bind:key="poll.id">
						<h1>POLLS WILL DEFINITELY GO HERE</h1>
						<h1>{poll.question}</h1>
						<h1>{poll.slug_field}</h1>
					</div>
					<!-- <span class="sl-date">5 minutes ago</span>
														<p>
															assign a new task
															<a href="#"> Design weblayout</a>
														</p>
														<div class="row">
															<div class="col-lg-3 col-md-6 m-b-20">
																<img
																	src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/big/img1.jpg"
																	class="img-responsive radius"
																/>
															</div>
															<div class="col-lg-3 col-md-6 m-b-20">
																<img
																	src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/big/img2.jpg"
																	class="img-responsive radius"
																/>
															</div>
															<div class="col-lg-3 col-md-6 m-b-20">
																<img
																	src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/big/img3.jpg"
																	class="img-responsive radius"
																/>
															</div>
															<div class="col-lg-3 col-md-6 m-b-20">
																<img
																	src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/big/img4.jpg"
																	class="img-responsive radius"
																/>
															</div>
														</div>
														<div class="like-comm">
															<a href="javascript:void(0)" class="link m-r-10"
																>2 comment</a
															>
															<a href="javascript:void(0)" class="link m-r-10"
																><i class="fa fa-heart text-danger"></i> 5
																Love</a
															>
														</div>
													</div>
												</div> -->
				</div>
			</div>
			<hr />
			<!-- <div class="sl-item">
												<PollMenu></PollMenu>
												<div class="sl-left">
													<img
														src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/users/2.jpg"
														alt="user"
														class="img-circle"
													/>
												</div>
												<div class="sl-right">
													<div>
														<a href="#" class="link">John Doe</a>
														<span class="sl-date">5 minutes ago</span>
														<div class="m-t-20 row">
															<div class="col-md-3 col-xs-12">
																<img
																	src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/big/img1.jpg"
																	alt="user"
																	class="img-responsive radius"
																/>
															</div>
															<div class="col-md-9 col-xs-12">
																<p>
																	Lorem ipsum dolor sit amet, consectetur
																	adipiscing elit. Integer nec odio. Praesent
																	libero. Sed cursus ante dapibus diam.
																</p>
																<a href="#" class="btn btn-success">
																	Design weblayout</a
																>
															</div>
														</div>
														<div class="like-comm m-t-20">
															<a href="javascript:void(0)" class="link m-r-10"
																>2 comment</a
															>
															<a href="javascript:void(0)" class="link m-r-10"
																><i class="fa fa-heart text-danger"></i> 5
																Love</a
															>
														</div>
													</div>
												</div>
											</div> -->
			<hr />
			<!-- <div class="sl-item">
												<PollMenu></PollMenu>
												<div class="sl-left">
													<img
														src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/users/3.jpg"
														alt="user"
														class="img-circle"
													/>
												</div>
												<div class="sl-right">
													<div>
														<a href="#" class="link">John Doe</a>
														<span class="sl-date">5 minutes ago</span>
														<p class="m-t-10">
															Lorem ipsum dolor sit amet, consectetur adipiscing
															elit. Integer nec odio. Praesent libero. Sed
															cursus ante dapibus diam. Sed nisi. Nulla quis sem
															at nibh elementum imperdiet. Duis sagittis ipsum.
															Praesent mauris. Fusce nec tellus sed augue semper
														</p>
													</div>
													<div class="like-comm m-t-20">
														<a href="javascript:void(0)" class="link m-r-10"
															>2 comment</a
														>
														<a href="javascript:void(0)" class="link m-r-10"
															><i class="fa fa-heart text-danger"></i> 5 Love</a
														>
													</div>
												</div>
											</div> -->
			<hr />
			<!-- <div class="sl-item">
												<PollMenu></PollMenu>
												<div class="sl-left">
													<img
														src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/users/4.jpg"
														alt="user"
														class="img-circle"
													/>
												</div>
												<div class="sl-right">
													<div>
														<a href="#" class="link">John Doe</a>
														<span class="sl-date">5 minutes ago</span>
														<blockquote class="m-t-10">
															Lorem ipsum dolor sit amet, consectetur
															adipisicing elit, sed do eiusmod tempor incididunt
														</blockquote>
													</div>
												</div>
											</div> -->
			<hr />
			<!-- <div class="sl-item">
												<PollMenu></PollMenu>
												<div class="sl-left">
													<img
														src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/users/1.jpg"
														alt="user"
														class="img-circle"
													/>
												</div>
												<div class="sl-right">
													<div>
														<a href="#" class="link">John Doe</a>
														<span class="sl-date">5 minutes ago</span>
														<p>
															assign a new task
															<a href="#"> Design weblayout</a>
														</p>
														<div class="row">
															<div class="col-lg-3 col-md-6 m-b-20">
																<img
																	src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/big/img1.jpg"
																	class="img-responsive radius"
																/>
															</div>
															<div class="col-lg-3 col-md-6 m-b-20">
																<img
																	src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/big/img2.jpg"
																	class="img-responsive radius"
																/>
															</div>
															<div class="col-lg-3 col-md-6 m-b-20">
																<img
																	src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/big/img3.jpg"
																	class="img-responsive radius"
																/>
															</div>
															<div class="col-lg-3 col-md-6 m-b-20">
																<img
																	src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/big/img4.jpg"
																	class="img-responsive radius"
																/>
															</div>
														</div>
														<div class="like-comm">
															<a href="javascript:void(0)" class="link m-r-10"
																>2 comment</a
															>
															<a href="javascript:void(0)" class="link m-r-10"
																><i class="fa fa-heart text-danger"></i> 5
																Love</a
															>
														</div>
													</div>
												</div>
											</div> -->
			<hr />
			<!-- <div class="sl-item">
												<PollMenu></PollMenu>
												<div class="sl-left">
													<img
														src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/users/2.jpg"
														alt="user"
														class="img-circle"
													/>
												</div>
												<div class="sl-right">
													<div>
														<a href="#" class="link">John Doe</a>
														<span class="sl-date">5 minutes ago</span>
														<div class="m-t-20 row">
															<div class="col-md-3 col-xs-12">
																<img
																	src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/big/img1.jpg"
																	alt="user"
																	class="img-responsive radius"
																/>
															</div>
															<div class="col-md-9 col-xs-12">
																<p>
																	Lorem ipsum dolor sit amet, consectetur
																	adipiscing elit. Integer nec odio. Praesent
																	libero. Sed cursus ante dapibus diam.
																</p>
																<a href="#" class="btn btn-success">
																	Design weblayout</a
																>
															</div>
														</div>
														<div class="like-comm m-t-20">
															<a href="javascript:void(0)" class="link m-r-10"
																>2 comment</a
															>
															<a href="javascript:void(0)" class="link m-r-10"
																><i class="fa fa-heart text-danger"></i> 5
																Love</a
															>
														</div>
													</div>
												</div>
											</div> -->
			<hr />
			<!-- <div class="sl-item">
												<PollMenu></PollMenu>
												<div class="sl-left">
													<img
														src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/users/3.jpg"
														alt="user"
														class="img-circle"
													/>
												</div>
												<div class="sl-right">
													<div>
														<a href="#" class="link">John Doe</a>
														<span class="sl-date">5 minutes ago</span>
														<p class="m-t-10">
															Lorem ipsum dolor sit amet, consectetur adipiscing
															elit. Integer nec odio. Praesent libero. Sed
															cursus ante dapibus diam. Sed nisi. Nulla quis sem
															at nibh elementum imperdiet. Duis sagittis ipsum.
															Praesent mauris. Fusce nec tellus sed augue semper
														</p>
													</div>
													<div class="like-comm m-t-20">
														<a href="javascript:void(0)" class="link m-r-10"
															>2 comment</a
														>
														<a href="javascript:void(0)" class="link m-r-10"
															><i class="fa fa-heart text-danger"></i> 5 Love</a
														>
													</div>
												</div>
											</div> -->

			<hr />
			<!-- <div class="hacker-news-list">
												<div class="hacker-news-header">
													<a target="_blank" href="http://www.ycombinator.com/">
														<img src="https://news.ycombinator.com/y18.gif" />
													</a>
													<span>News Feeds</span>
												</div>
												<div
													class="hacker-news-item"
													v-for="(item, key) in list"
													:key="key"
												>
													<PollMenu></PollMenu>
													<div class="sl-left">
														<img
															src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/users/3.jpg"
															alt="user"
															class="img-circle"
														/>
													</div>

													<b
														><span class="num font-15" v-text="key + 1"></span
													></b>
													<p>
														<b
															><a
																target="_blank"
																:href="item.url"
																v-text="item.title"
															></a
														></b>
													</p>

													<div class="sl-right">
														<div>
															<a href="#" class="link">John Doe</a>
															<span class="sl-date">5 minutes ago</span>
															<p class="m-t-10">
																Lorem ipsum dolor sit amet, consectetur
																adipiscing elit. Integer nec odio. Praesent
																libero. Sed cursus ante dapibus diam. Sed nisi.
																Nulla quis sem at nibh elementum imperdiet. Duis
																sagittis ipsum. Praesent mauris. Fusce nec
																tellus sed augue semper
															</p>
														</div>
														<div class="like-comm m-t-20">
															<a href="javascript:void(0)" class="link m-r-10"
																>2 comment</a
															>
															<a href="javascript:void(0)" class="link m-r-10"
																><i class="fa fa-heart text-danger"></i> 5
																Love</a
															>
														</div>
													</div>
													<p>
														<small>
															<span v-text="item.points"></span>
															points by
															<a
																target="_blank"
																:href="
																	'https://news.ycombinator.com/user?id=' +
																		item.author
																"
																v-text="item.author"
															></a>
															|
															<a
																target="_blank"
																:href="
																	'https://news.ycombinator.com/item?id=' +
																		item.objectID
																"
																v-text="item.num_comments + ' comments'"
															></a>
														</small>
													</p>
												</div>
												<infinite-loading @infinite="infiniteHandler">
													<span slot="no-more">
														There is no more News Feed :(
													</span>
												</infinite-loading>
											</div> -->
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
