using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ArtStagram.Migrations
{
    public partial class Migration4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Likes",
                table: "posts");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Likes",
                table: "posts",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
