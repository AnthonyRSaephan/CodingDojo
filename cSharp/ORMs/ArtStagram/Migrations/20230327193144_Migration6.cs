using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ArtStagram.Migrations
{
    public partial class Migration6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LikedPost_posts_PostId",
                table: "LikedPost");

            migrationBuilder.DropForeignKey(
                name: "FK_LikedPost_users_UserId",
                table: "LikedPost");

            migrationBuilder.DropPrimaryKey(
                name: "PK_LikedPost",
                table: "LikedPost");

            migrationBuilder.RenameTable(
                name: "LikedPost",
                newName: "liked_posts");

            migrationBuilder.RenameIndex(
                name: "IX_LikedPost_UserId",
                table: "liked_posts",
                newName: "IX_liked_posts_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_LikedPost_PostId",
                table: "liked_posts",
                newName: "IX_liked_posts_PostId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_liked_posts",
                table: "liked_posts",
                column: "LikedPostId");

            migrationBuilder.AddForeignKey(
                name: "FK_liked_posts_posts_PostId",
                table: "liked_posts",
                column: "PostId",
                principalTable: "posts",
                principalColumn: "PostId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_liked_posts_users_UserId",
                table: "liked_posts",
                column: "UserId",
                principalTable: "users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_liked_posts_posts_PostId",
                table: "liked_posts");

            migrationBuilder.DropForeignKey(
                name: "FK_liked_posts_users_UserId",
                table: "liked_posts");

            migrationBuilder.DropPrimaryKey(
                name: "PK_liked_posts",
                table: "liked_posts");

            migrationBuilder.RenameTable(
                name: "liked_posts",
                newName: "LikedPost");

            migrationBuilder.RenameIndex(
                name: "IX_liked_posts_UserId",
                table: "LikedPost",
                newName: "IX_LikedPost_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_liked_posts_PostId",
                table: "LikedPost",
                newName: "IX_LikedPost_PostId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_LikedPost",
                table: "LikedPost",
                column: "LikedPostId");

            migrationBuilder.AddForeignKey(
                name: "FK_LikedPost_posts_PostId",
                table: "LikedPost",
                column: "PostId",
                principalTable: "posts",
                principalColumn: "PostId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_LikedPost_users_UserId",
                table: "LikedPost",
                column: "UserId",
                principalTable: "users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
